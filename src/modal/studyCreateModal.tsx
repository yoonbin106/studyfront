import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/modalStyles';

interface StudyCreateModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const StudyCreateModal: React.FC<StudyCreateModalProps> = ({ visible, onClose, onConfirm }) => {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>새로운 스터디 생성</Text>
          <Text style={styles.modalText}>새로운 스터디를 생성하시겠습니까?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onConfirm} style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>확인</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default StudyCreateModal;
