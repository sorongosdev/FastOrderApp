import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/Progress'; 

interface ProgressBarProps {
  steps: string[];
  currentStep: number; // 현재 단계 (0부터 시작)
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep }) => {
    const stepLineColor = () => {
        if(currentStep == 0) {
            return '5%';
        } else if(currentStep == 1) {
            return '42%';
        } else if(currentStep == 2) {
            return;
        } else {
            return '0%';
        }
    }    
    return(
    <View style={styles.progressBar}>
      <View style={styles.steps}>
        {steps.map((step, index) => (
          <View key={index} style={[styles.step, index <= currentStep && styles.active]}>
            <View style={[styles.circle, index <= currentStep && styles.filled,
                currentStep === 1 && index < 1 && styles.transparentCircle,
                currentStep === 2 && index < 2 && styles.transparentCircle
            ]} />
            <Text style={styles.label}>{step}</Text>
          </View>
        ))}
      </View>
      <View style={styles.line}/> 
      <View style={[styles.lineColor, { width: stepLineColor()}]} />
    </View>
  );
};

export default ProgressBar;
