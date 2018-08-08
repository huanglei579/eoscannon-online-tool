/*
 * GetQrcode
 *
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input, Alert, Icon } from 'antd';
import QRCode from 'qrcode.react';
import utilsMsg from '../../utils/messages';
import { formItemLayout } from '../../utils/utils';

const FormItem = Form.Item;
const { TextArea } = Input;

export default class GetQrcode extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { getFieldDecorator } = this.props.form;
     const keyProviderLabel = this.props.formatMessage(
      utilsMsg.KeyProviderFormItemLabel
     );
     const keyProviderPlaceholder = this.props.formatMessage(
      utilsMsg.KeyProviderFormItemPlaceholder,
     );
     const CopyMessage = this.props.formatMessage(
      utilsMsg.CopyMessage,
     );

    // const TransactionTextAreaPlaceholder = this.props.formatMessage(
    //  utilsMsg.TransactionTextAreaPlaceholder,
    // );
    // const CopyTransactionButtonName = this.props.formatMessage(
    //  utilsMsg.CopyTransactionButtonName,
    // );
    // console.log(!this.props.CopyTransactionButtonState);
    return (
      <div>
        <FormItem>
          <Alert
            message={keyProviderLabel}
            description={keyProviderPlaceholder}
            type="info"
          />
        </FormItem>

        <FormItem>
          <div style={{ textAlign: 'center' }}>
            <QRCode value={this.props.QrCodeValue} size={256} />
          </div>
        </FormItem>
        <FormItem>
          <TextArea value={this.props.QrCodeValue} rows="4" />
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            className="form-button"
            onClick={this.props.handleCopyTransaction}
          >
            {CopyMessage}
          </Button>
        </FormItem>
      </div>
    );
  }
}

GetQrcode.propTypes = {
  form: PropTypes.object,
  formatMessage: PropTypes.func,
  GetTransactionButtonClick: PropTypes.func,
  GetTransactionButtonLoading: PropTypes.bool,
  GetTransactionButtonDisabled: PropTypes.bool,
  QrCodeValue: PropTypes.string,
  CopyTransactionButtonState: PropTypes.bool,
  handleCopyTransaction: PropTypes.func,
};