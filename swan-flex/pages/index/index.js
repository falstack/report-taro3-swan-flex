/**
 * @file index.js
 * @author swan
 */
const app = getApp()

Component({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: swan.canIUse('button.open-type.getUserInfo')
    },
    onLoad() {
        // 监听页面加载的生命周期函数
    },
    getUserInfo(e) {
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    }
})
