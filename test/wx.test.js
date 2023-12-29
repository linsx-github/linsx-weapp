const _ = require('./utils')

test('wx.getSystemInfo', async () => {
  wx.getSystemInfo({
    success(res) {
      expect(res.errMsg).toBe('getSystemInfo:ok')
    },
    complete(res) {
      expect(res.errMsg).toBe('getSystemInfo:ok')
    },
  })
})

test('wx.getSystemInfoSync', () => {
  const info = wx.getSystemInfoSync()
  expect(info.SDKVersion).toBe('2.4.1')
  expect(info.version).toBe('8.0.5') // 更新这里的版本号
})

