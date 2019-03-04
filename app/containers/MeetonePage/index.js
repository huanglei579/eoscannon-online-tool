/*
 * MeetonePage
 *
 */

import React from 'react'
import { injectIntl } from 'react-intl'
import { Form, Icon, Input, Card, Col, Row, Modal, Tabs, Select, Table, Alert, Tag } from 'antd'
import PropTypes from 'prop-types'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { makeSelectNetwork } from '../LanguageProvider/selectors'
import {
  formItemLayout,
  getEos,
  openTransactionFailNotification
} from '../../utils/utils'
import { LayoutContent } from '../../components/NodeComp'
import ScanQrcode from '../../components/ScanQrcode'
import DealGetQrcode from '../../components/DealGetQrcode'
import messages from './messages'
import utilsMsg from '../../utils/messages'

const FormItem = Form.Item
const Option = Select.Option
const Search = Input.Search;

export class MeetonePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      eos: null,
      formatMessage: this.props.intl.formatMessage,
      GetTransactionButtonState: false, // 获取报文按钮可点击状态
      QrCodeValue: this.props.intl.formatMessage(utilsMsg.QrCodeInitValue), // 二维码内容
      transaction: {},
      scatterStatus: false,
      GetTransactionButtonScatterState: true,
      columnsData: [],
      keyAccounts: []
    }
  }
  /**
   * 链接scatter
   * */
  componentDidMount () { }
  /**
   * 输入框内容变化时，改变按钮状态
   * */
  componentWillReceiveProps (nextProps) {
    this.onValuesChange(nextProps)
  }
  /**
   * 输入框内容变化时，改变按钮状态
   * */
  onValuesChange = nextProps => {
    const values = nextProps.form.getFieldsValue()
    const { AccountName } = values
    this.setState({
      GetTransactionButtonState:  !!AccountName })
  };

  /**
   * 用户点击生成报文，根据用户输入参数，生成签名报文，并将其赋值到文本框和生成对应的二维码
   * */
  handleGetTransaction = record => {
    if (!this.state.GetTransactionButtonState) {
      return
    }
    const values = this.props.form.getFieldsValue()
    const eos = getEos(this.props.SelectedNetWork)
    const { AccountName} = values
    eos.getAbi('worbliworbli').then(res => {
      eos.fc.abiCache.abi(res.account_name, res.abi)
    }).catch(err=>{
      console.log('err', err)
    })
    var data = {
      owner: AccountName,
    }
    console.log('data', data)
    eos
      .transaction(
        {
          actions: [
            {
              account: 'worbliworbli',
              name: 'reg',
              authorization: [
                {
                  actor: AccountName,
                  permission: 'active'
                }
              ],
              data
            }
          ]
        },
        {
          sign: false,
          broadcast: false
        },
      )
      .then(tr => {
        this.setState({
          transaction: tr.transaction,
          eos
        })
      })
      .catch(err => {
        console.log('catch err', err)
        openTransactionFailNotification(this.state.formatMessage, err.name)
      })
  };

  onSearch=(value)=> {
    console.log(`selected ${value}`)
    const eos = getEos('main')
    eos.getAccount('huangxiaolei').then(data=>{
      console.log('data ,',data)
      let pubkey = data.permissions[0].required_auth.keys[0].key
      console.log('pubkey ,',pubkey)
      this.getKeyAccount(pubkey)
    })
  }

  getKeyAccount = (pubkey) => {
    const eosMeetone = getEos('meetone')
    eosMeetone.getKeyAccounts( pubkey ).then(res =>{
      console.log('res = ',res)
      this.setState({
        keyAccounts: res
      })
    }).catch(err=>{
      console.log('err = ',err)
    })
  }

  checkAccountName = (rule, value, callback) => {
    value = value.toLowerCase().trim()
    this.props.form.setFieldsValue({AccountName : value})
    callback();
    return
  }

  render () {
    const { getFieldDecorator } = this.props.form
    const AirGrabAlertMessage = this.state.formatMessage(
      messages.AirGrabAlertMessage,
    )
    const AirGrabAlertDescription = this.state.formatMessage(
      messages.AirGrabAlertDescription,
    )
    const OwnerPlaceholder = this.state.formatMessage(
      messages.OwnerPlaceholder,
    )
    // const OwnerLabel = this.state.formatMessage(messages.OwnerLabel);
    const ProducersDealTranscation = this.state.formatMessage(
      utilsMsg.ProducersDealTranscation,
    )
    const ProducersSendTranscation = this.state.formatMessage(
      utilsMsg.ProducersSendTranscation,
    )
    const keyAccountArr = this.state.keyAccounts.map(item=>(
      <Tag>{item}</Tag>
    ))
    return (
      <LayoutContent>
        <Row gutter={16}>
          <Col span={12}>
            <Card title={ProducersDealTranscation} bordered={false}>
              <FormItem>
                <Alert
                  message={AirGrabAlertMessage}
                  description=''
                  type="info"
                />
              </FormItem>
              <FormItem {...formItemLayout}>
                {getFieldDecorator('AccountName', {
                  rules: [{ 
                    required: true,
                     message: OwnerPlaceholder,
                     validator: this.checkAccountName
                    }]
                })(
                  <Search
                  placeholder={OwnerPlaceholder}
                  onSearch={value => this.onSearch(value)}
                  enterButton
                />
                )}
              </FormItem>
            <keyAccountArr />
              <DealGetQrcode
                eos={this.state.eos}
                form={this.props.form}
                formatMessage={this.state.formatMessage}
                GetTransactionButtonClick={this.handleGetTransaction}
                GetTransactionButtonState={this.state.GetTransactionButtonState}
                QrCodeValue={this.state.QrCodeValue}
                SelectedNetWork={this.props.SelectedNetWork}
                transaction={this.state.transaction}
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card title={ProducersSendTranscation} bordered={false}>
              <ScanQrcode
                eos={this.state.eos}
                form={this.props.form}
                formatMessage={this.state.formatMessage}
                SelectedNetWork={this.props.SelectedNetWork}
                transaction={this.state.transaction}
              />
            </Card>
          </Col>
        </Row>
      </LayoutContent>
    )
  }
}

MeetonePage.propTypes = {
  form: PropTypes.object,
  intl: PropTypes.object,
  SelectedNetWork: PropTypes.string
}

const MeetonePageIntl = injectIntl(MeetonePage)
const MeetonePageForm = Form.create()(MeetonePageIntl)

const mapStateToProps = createStructuredSelector({
  SelectedNetWork: makeSelectNetwork()
})

export default connect(mapStateToProps)(MeetonePageForm)
