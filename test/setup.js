import mockery from 'mockery'
import parseMock from './mocks/parse'
import i18nMock from './mocks/i18n'

global.__DEV__ = true

mockery.enable()
mockery.warnOnUnregistered(false)

mockery.registerMock('parse/react-native', parseMock)
mockery.registerMock('react-native-i18n', i18nMock)
mockery.registerMock('NavigationStateUtils', {})
