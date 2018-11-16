import * as types from '../constants';
import axios from 'axios';
import { delay } from 'redux-saga';
import {
  apply,
  takeEvery,
  takeLatest,
  throttle,
  put,
  call,
  take,
  all,
  fork,
} from 'redux-saga/effects';

function nodemailer(data) {
  return axios({
    method: 'post',
    url: '/contact',
    data: {
      email: data.email,
      message: data.message,
      name: data.name,
      selected: data.selected,
    }
  });
}

function apiBlogPosts() {
  return axios({
    method: 'get',
    url: 'http://drupal8.dd:8083/api/posts?_format=json',
  })
  .then(data => data);
}

function* sendMailSaga(data) {
  console.log('saga', data);
  yield delay(1250);
  const request = yield call(nodemailer, data);
  const result = request.data;
  console.log('results', result);
  try {
    yield put({ type: types.SEND_MAIL_SUCCESS, result });
  } catch (error) {
    yield put({ type: types.SEND_MAIL_FAILURE, error });
  }
}

function* fetchBlogSagas(data) {
  const request = yield call(apiBlogPosts);
  const result = request.data;
  console.log('saga', result);
  try {
    yield put({ type: types.FETCH_BLOGS_SUCCESS, result });
  } catch (error) {
    yield put({ type: types.FETCH_BLOGS_FAILURE, error });
  }
}

function* rootSaga() {
  yield takeEvery(types.SEND_MAIL, sendMailSaga);
  yield takeEvery(types.FETCH_BLOGS, fetchBlogSagas);
}

export default rootSaga;
