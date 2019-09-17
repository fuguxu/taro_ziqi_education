import Taro, { Component} from '@tarojs/taro'
import { View} from '@tarojs/components'
import './children-list.scss'

export default class ChildList extends Component {

  constructor(props){
    super(props)
  }
  state = {
    
  }

  addChildren = ()=>{
    Taro.navigateTo({
        url:'/pages/child/child?type=add'
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
      <View className='child-list'>
        <View>
            <View className="at-row child-header">
                <View className="at-col-10">
                    <View className="child-text">孩子信息</View>
                </View>
                <View className="at-col-2 icon-col">
                    <View onClick={this.addChildren.bind(this)} className="at-icon at-icon-add-circle"></View>
                </View>
            </View>
        </View>
      </View>
    )
  }
}
