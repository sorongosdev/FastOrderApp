import React, {useState} from 'react';
import {TouchableOpacity, Text, View, Modal} from 'react-native';
/** Icons */
import CloseIcon from '@assets/icon_close_modal.svg';
/** Style */
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
          <View style={styles.modalTextWrapper}>
            <Text style={styles.modalDescriptionText}>
              가게 찜을 취소하면{'\n'}해당 가게 메뉴 찜도 함께 사라져요
            </Text>
          </View>
          <TouchableOpacity style={styles.iconBox} onPress={onClose}>
            <CloseIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalButtons} onPress={onConfirm}>
            <Text style={styles.okText}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
