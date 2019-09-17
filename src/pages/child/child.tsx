import Taro, { Component, Config} from '@tarojs/taro'
import { View ,Text,Picker} from '@tarojs/components'
import {AtForm,AtButton, AtInput} from 'taro-ui'
import './child.scss'


export default class Child extends Component {

  config: Config = {
    navigationBarTitleText: '编辑孩子',
  }
  constructor(props){
    super(props)
  }
  state = {
    sexOptions:[
        {
            label:'男',
            value:'0'
        },
        {
            label:'女',
            value:'1'
        }
    ],
    form:{
        name:'',
        mobile_no:'',
        school_name:'',
        grade:'',
        idcard:'',
        emergency_mobile:'',
        sex:{label:'',value:''},
    },
    open:false
  }
  

  handleChange = (key,value)=>{
      this.setState((preState)=>{
        if(key==='sex'){
            preState.form[key] = preState.sexOptions[ value.detail.value];
        }else{
            preState.form[key] = value;
        }
       
      },()=>{
        console.log(this.state.form)
      })
      
      console.log(key)
      console.log(value)
      return value
  }

 

  submit = ()=>{
      console.log(this.state.form)
  }
 
  componentWillMount () { }

  componentDidMount () {
    console.log(this.$router.params)
    // console.log(this.conut)
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='child'>
          <AtForm>
            <AtInput
            name='name'
            type='text'
            placeholder='姓名'
            value={this.state.form.name}
            onChange={this.handleChange.bind(this,'name')}
            />
            <Picker rangeKey="label" mode='selector' value={0} range={this.state.sexOptions} 
                    onChange={this.handleChange.bind(this,'sex')}>
                <View>
                    <AtInput
                        name='sex'
                        type='text'
                        editable={false}
                        placeholder='性别'
                        value={this.state.form.sex.label}
                        onChange={()=>{}}
                    />
                </View>
            </Picker>
            <AtInput
                name='school_name'
                type='text'
                placeholder='学校'
                value={this.state.form.school_name}
                onChange={this.handleChange.bind(this,'school_name')}
            />
            <AtInput
                name='grade'
                type='text'
                placeholder='年级'
                value={this.state.form.grade}
                onChange={this.handleChange.bind(this,'grade')}
            />
            <AtInput
                name='idcard'
                type='idcard'
                placeholder='身份证'
                value={this.state.form.idcard}
                onChange={this.handleChange.bind(this,'idcard')}
            />
            <AtInput
                name='mobile_no'
                type='phone'
                placeholder='联系方式'
                value={this.state.form.mobile_no}
                onChange={this.handleChange.bind(this,'mobile_no')}
            />
        </AtForm>
        <View className="fixed fixed-b">
            <AtButton className="border-radius-0" type='primary' onClick={this.submit.bind(this)}>保存</AtButton>
        </View>
      </View>
    )
  }
}
