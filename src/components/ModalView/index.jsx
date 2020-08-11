import React, {
    useState, Children
} from 'react';

import styles from './style';
import { 
    View,
    Modal, 
    TouchableWithoutFeedback,
} from 'react-native';

export default function ModalView (props){
    return(
        <Modal
            {...props}
        >
            <View style={styles.centeredView}>
                <TouchableWithoutFeedback 
                    onPress={()=>{ props?.onTouch(false) 
                }}>
                    <View style={styles.vwTouch}></View>
                </TouchableWithoutFeedback>
                {props.children}
            </View>
        </Modal>
    )
}