// ModalContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [comment, setComment] = useState('');
  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
  const [turnosVigentes, setTurnosVigentes] = useState([]);

  const fetchTurnosVigentes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/turnosVigentes'); // Corregido
      setTurnosVigentes(response.data);
    } catch (error) {
      console.error('Error fetching turnos vigentes:', error);
    }
  };

  useEffect(() => {
    fetchTurnosVigentes();
  }, []);


  const handleShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setComment('');
  };

  const handleShowUserModal = () => {
    setShowModal(false);
    setShowUserModal(true);
  };

  const handleCloseUserModal = () => {
    setShowUserModal(false);
    setUserData({ name: '', email: '', phone: '' });
  };

  const handleSubmit = async () => {
    try {
      const nuevoTurno = {
        date: selectedDate,
        time: selectedTime,
        comment,
        userName: userData.name,
        userEmail: userData.email,
        userPhone: userData.phone,
      };
      await axios.post('http://localhost:5000/api/saveAppointment', nuevoTurno);
      fetchTurnosVigentes(); // Actualiza los turnos vigentes después de registrar un nuevo turno
      handleCloseUserModal();
      handleCloseModal();
    } catch (error) {
      console.error('Error registrando nuevo turno:', error);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        showUserModal,
        modalContent,
        selectedDate,
        selectedTime,
        userData,
        turnosVigentes,
        comment,
        handleShowModal,
        handleCloseModal,
        handleCloseUserModal,
        handleShowUserModal,
        setSelectedDate,
        setSelectedTime,
        setComment,
        setUserData,
        handleSubmit,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};