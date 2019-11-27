import Taro, { Component, Config } from '@tarojs/taro'
import { View,Image ,Swiper, SwiperItem } from '@tarojs/components'
// import { AtButton } from 'taro-ui'
import './hot-course.scss';

export default class Recommend extends Component {
    constructor(props){
        super(props)
    }
    state = {
      list:[
        {
          id:1,
          url:require('../../assets/images/hot-course1.svg'),
          name:'课程名称',
          character:'课程特点，优点简介',
          price:'150'
        },
        {
          id:2,
          url:require('../../assets/images/hot-course1.svg'),
          name:'课程名称',
          character:'课程特点，优点简介',
          price:'150'
        },
        {
          id:3,
          url:require('../../assets/images/hot-course1.svg'),
          name:'课程名称',
          character:'课程特点，优点简介',
          sale_price:'199',
          price:'129'
        },
        {
          id:4,
          url:require('../../assets/images/hot-course1.svg'),
          name:'课程名称',
          character:'课程特点，优点简介',
          sale_price:'199',
          price:'129'
        }
      ],
    }
    
    componentWillMount(){
      
    }
    render() {
        const {list} = this.state ;
        const courses = list.map((item)=>{
          return <View className="list-item" key={item.id}>
                    <Image className="img" mode="widthFix"  src={item.url} ></Image>
                    <View className="desc">
                      <View className="character">{item.character}</View>
                      <View className="name">{item.name}</View>
                      <View className="price">¥{item.price}</View>
                    </View>
                 </View>
        })
        return (
          <View className="hot-course">
            <View className="text">热门课程</View>
            <View className="list-container">
              {courses}
            </View>
          </View>        
        )
    }
}