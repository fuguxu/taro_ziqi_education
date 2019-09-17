import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtButton ,AtSearchBar} from 'taro-ui'
import './index.scss'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页',
  }

  state = {
    value:''
  }

  onChange=(value)=>{
    this.setState({
      value
    })
  }

  handlerClick = async ()=>{ //用箭头函数 在模板中绑定解决this指向问题
    console.log(this)
    // Taro.showToast({
    //   title: '测试一条toast',
    //   icon: 'none'
    // })
    Taro.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        Taro.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      }
     })
  }
  signClick = async ()=>{
    Taro.navigateTo({
      url:'/pages/sign/sign'
    })
  }
  orgClick = ()=>{
    Taro.navigateTo({
      url:'/pages/orgSign/orgSign'
    })
  }
  onShareAppMessage (res){
    console.log(res)
    return {
      title: '点点看哟！',
      path: '/pages/user/user?id=123'
    }
  }
  componentWillMount () { }

  componentDidMount () {
    console.log(DEV)
    console.log()
    // console.log(Taro.DEV)
    // Taro.request({
    //   url:'https://ming849358679.imwork.net/doLogin?username=123456789&password=123456&type=mobile',
    //   method:'GET'
    // }).then(res=>{
    //   console.log(res)
    // })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <AtButton onClick={this.handlerClick} type='primary'>查看地理位置</AtButton>
        <View>
          <AtSearchBar
          value={this.state.value}
          onChange={this.onChange}
        />
        </View>
        <View className='at-icon at-icon-settings'></View>
        <View className='fa fa-clock-o'></View>
        <AtButton onClick={this.signClick} type='primary'>家长注册</AtButton>
        <AtButton className="mt-10" onClick={this.orgClick} type='primary'>机构注册</AtButton>
      </View>
      
    )
  }
}
