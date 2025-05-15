import { useEffect, useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Eye, EyeOff } from 'lucide-react'; // Используем lucide-react для иконок

import './Ai.css';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export default function AI() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const saved = localStorage.getItem('chatHistory');
    if (saved) setChatHistory(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
  }, [chatHistory]);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => /^(?=.*[A-Z])(?=.*\d).{6,}$/.test(password);

  const handleLogin = (e) => {
    e.preventDefault();
    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Введите корректный email.');
      valid = false;
    } else setEmailError('');

    if (!validatePassword(password)) {
      setPasswordError('Пароль должен содержать минимум 6 символов, одну цифру и одну заглавную букву.');
      valid = false;
    } else setPasswordError('');

    if (password !== confirmPassword) {
      setConfirmPasswordError('Пароли не совпадают.');
      valid = false;
    } else setConfirmPasswordError('');

    if (valid) setIsLoggedIn(true);
  };

  const handleSubmit = async () => {
    if (!prompt.trim()) return;
    try {
      setLoading(true);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const result = await model.generateContent(prompt);
      const geminiResponse = await result.response;
      const text = await geminiResponse.text();
      setChatHistory((prev) => [...prev, { question: prompt, answer: text, timestamp: Date.now() }]);
      setPrompt('');
    } catch (err) {
      console.error('Ошибка при запросе к Gemini:', err);
      alert('Произошла ошибка. Проверь API-ключ и соединение.');
    } finally {
      setLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <h2>Вход</h2>
        <form onSubmit={handleLogin} noValidate>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error-text">{emailError}</p>}
          </div>

          <div className="input-group password-group">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="eye-icon" onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
            {passwordError && <p className="error-text">{passwordError}</p>}
          </div>

          <div className="input-group password-group">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Повторите пароль"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span className="eye-icon" onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
            {confirmPasswordError && <p className="error-text">{confirmPasswordError}</p>}
          </div>

          <button  type="submit" className='buton120-'>Войти</button>
        </form>
      </div>
    );
  }

  return (
    <div className="chat-container">
      <button onClick={() => setDarkMode((prev) => !prev)} className="theme-toggle">
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <h1 className="chat-title">Gemini</h1>

      <div className="input-row">
        <input
          type="text"
          placeholder="Введите ваш вопрос..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
        <button onClick={handleSubmit}>Отправить</button>
      </div>

      {loading && <div>Загрузка ответа...</div>}

      <div>
        {chatHistory.map((item, idx) => (
          <div key={idx} className="chat-message">
            <p className="question">Вы: {item.question}</p>
            <p className="answer">Gemini: {item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
