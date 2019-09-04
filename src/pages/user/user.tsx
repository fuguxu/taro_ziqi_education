import Taro, { Component, Config } from '@tarojs/taro'
import { View ,Text} from '@tarojs/components'
import { AtButton,AtMessage,AtInputNumber } from 'taro-ui'
import './user.scss'
import Count from '../../components/count/count'

import {CounterContext} from '../../components/createContext/counter-context'


export default class User extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '个人中心',
  }
  readOnly: string;
  constructor(props){
    super(props)
    this.readOnly = 'test'
  }
  state = {
    count:1
  }

  zjClick=()=>{
    Taro.atMessage({
      message:'张晶，我爱你哟！',
      type:'success'
    })
  }
  handleChange = (value)=> {
    this.setState({
      count:value
    },()=>{
      console.log(this.state)
    })
  }
  componentWillMount () { }

  componentDidMount () {
    // console.log(Taro)
    // console.log(this.conut)
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='user'>
        <AtMessage />
        <AtButton onClick={this.zjClick} type='primary'>张晶，请点一下</AtButton>
        <CounterContext.Provider value={this.state.count}>
          <Count />
        </CounterContext.Provider>
        <AtInputNumber
          type="number"
          min={0}
          max={10}
          step={1}
          value={this.state.count}
          onChange={this.handleChange}
        />
        <View>
          <Text>{this.state.count}</Text>
          <Text>{this.readOnly}</Text>
        </View>
      </View>
    )
  }
}
