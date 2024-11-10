import React, {useState} from 'react';
import {TouchableOpacity, Text, View, Modal} from 'react-native';
import styles from '../styles/MainModal';

interface ModalProp {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function MainModal({
  visible,
  onClose,
  onConfirm,
}: ModalProp): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>가게 찜을 취소하면 해당 가게 메뉴 찜도 함께 사라져요</Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity onPress={onConfirm}>
              <Text>확인</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose}>
              <Text>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
