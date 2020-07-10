import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='scroll-page'>
        <View className='flex-header'>
          header
        </View>
        <View className='flex-body'>
          body
        </View>
      </View>
    )
  }
}
