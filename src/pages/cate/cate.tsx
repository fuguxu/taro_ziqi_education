import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './cate.scss'

export default class Cate extends Component {


  config: Config = {
    navigationBarTitleText: '分类',
  }
  
  componentWillMount () { }

  componentDidMount () {
  
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='cate'>
          分类页面
      </View>
      
    )
  }
}
