/*
 * DealGetQrcode
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input, Alert } from 'antd';
import QRCode from 'qrcode.react';
import copy from 'copy-to-clipboard';
import Fcbuffer from 'fcbuffer';

import utilsMsg from '../../utils/messages';
import {
  openNotification,
  openTransactionSuccessNotification,
} from '../../utils/utils';

const FormItem = Form.Item;
const { TextArea } = Input;

export default class DealGetQrcode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eos: null,
      QrCodeValue: this.props.QrCodeValue,
      CopyTransactionButtonState: false,
    };
  }

  /**
   * 输入框内容变化时，改变按钮状态
   * */
  componentWillReceiveProps(nextProps) {
    if (nextProps.eos && nextProps.transaction !== this.props.transaction) {
      this.setState({ eos: nextProps.eos }, this.getUnSignedBuffer);
    }
  }

  // 离线签名
  getUnSignedBuffer = () => {
    const MainChainId =
      'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906';
    const TestChainId =
      '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca';
    const chainId =
      this.props.SelectedNetWork === 'main' ? MainChainId : TestChainId;
    const buf = Fcbuffer.toBuffer(
      this.state.eos.fc.structs.transaction,
      this.props.transaction.transaction,
    );
    const chainIdBuf = new Buffer(chainId, 'hex');
    const UnSignedBuffer = Buffer.concat([
      chainIdBuf,
      buf,
      new Buffer(new Uint8Array(32)),
    ]);

    this.props.form.setFieldsValue({
      transactionTextArea: JSON.stringify(UnSignedBuffer),
    });
    this.setState({
      QrCodeValue: JSON.stringify(UnSignedBuffer),
      CopyTransactionButtonState: true,
    });
    openTransactionSuccessNotification(this.props.formatMessage);
  };

  /**
   * 用户点击复制签名报文，将报文赋值到剪贴板，并提示用户已复制成功
   * */
  handleCopyTransaction = () => {
    if (!this.props.GetTransactionButtonState) {
      return;
    }
    copy(JSON.stringify(this.props.transaction));
    openNotification(this.props.formatMessage);
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const GetTransactionButtonName = this.props.formatMessage(
      utilsMsg.GetTransactionFormItemButtonName,
    );
    const CopyAlertMessage = this.props.formatMessage(
      utilsMsg.CopyAlertMessage,
    );
    const CopyAlertDescription = this.props.formatMessage(
      utilsMsg.CopyAlertDescription,
    );
    const TransactionTextAreaPlaceholder = this.props.formatMessage(
      utilsMsg.TransactionTextAreaPlaceholder,
    );
    const CopyTransactionButtonName = this.props.formatMessage(
      utilsMsg.CopyTransactionButtonName,
    );
    return (
      <div>
        <FormItem>
          <Button
            type="primary"
            className="form-button"
            onClick={this.props.GetTransactionButtonClick}
            disabled={!this.props.GetTransactionButtonState}
          >
            {GetTransactionButtonName}
          </Button>
        </FormItem>
        <FormItem>
          <Alert
            message={CopyAlertMessage}
            description={CopyAlertDescription}
            type="info"
            closable
          />
        </FormItem>
        <FormItem>
          {getFieldDecorator('transactionTextArea', {
            rules: [
              { required: true, message: TransactionTextAreaPlaceholder },
            ],
          })(
            <TextArea
              disabled="true"
              placeholder={TransactionTextAreaPlaceholder}
            />,
          )}
        </FormItem>
        <FormItem>
          <div style={{ textAlign: 'center' }}>
            <QRCode value={this.state.QrCodeValue} size={256} />
          </div>
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            className="form-button"
            disabled={!this.state.CopyTransactionButtonState}
            onClick={this.handleCopyTransaction}
          >
            {CopyTransactionButtonName}
          </Button>
        </FormItem>
      </div>
    );
  }
}

DealGetQrcode.propTypes = {
  eos: PropTypes.object,
  form: PropTypes.object,
  formatMessage: PropTypes.func,
  GetTransactionButtonClick: PropTypes.func,
  GetTransactionButtonState: PropTypes.bool,
  transaction: PropTypes.object,
  QrCodeValue: PropTypes.string,
  SelectedNetWork: PropTypes.string,
};