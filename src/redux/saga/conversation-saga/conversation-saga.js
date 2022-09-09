import {takeLatest, put} from 'redux-saga/effects';
import {responseValidator} from '../../../shared/exporter';
import * as API from '../../../shared/service/conversationService';
import * as types from '../../actions/types';

export function* ConversationSaga() {
  yield takeLatest(types.CREATE_CONVERSATION_REQUEST, createConversation);
  yield takeLatest(
    types.CREATE_ADMIN_CONVERSATION_REQUEST,
    createAdminConversation,
  );
  yield takeLatest(types.GET_CONVERSATION_LIST_REQUEST, getConversationList);
  yield takeLatest(types.DELETE_CONVERSATION_REQUEST, deleteConversation);
  yield takeLatest(types.GET_ALL_MESSAGES_REQUEST, getAllMessages);
  yield takeLatest(types.GET_ALL_ADMIN_MESSAGES_REQUEST, getAllAdminMessages);
  yield takeLatest(types.READ_MESSAGES_REQUEST, readAllMessages);
  yield takeLatest(types.REPORT_USER_REQUEST, reportUserProfile);
  yield takeLatest(types.BLOCK_USER_REQUEST, blockUserProfile);
  yield takeLatest(types.UNBLOCK_USER_REQUEST, unBlockUserProfile);
  yield takeLatest(types.GET_BLOCK_USER_LIST_REQUEST, getBlockUserList);
  yield takeLatest(types.GET_NOTIFICATION_LIST_REQUEST, getNotificationList);
  yield takeLatest(types.SEND_FCM_REQUEST, sendFcmToken);
  yield takeLatest(types.SEND_MESSAGES_REQUEST, sendMessages);
  yield takeLatest(types.SEND_ADMIN_MESSAGES_REQUEST, sendMessagesToAdmin);
}
function* sendFcmToken(params) {
  try {
    const res = yield API.sendFcm();
    if (res) {
      yield put({
        type: types.SEND_FCM_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.SEND_FCM_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
function* getNotificationList(params) {
  try {
    const res = yield API.getNotificationList();
    if (res) {
      yield put({
        type: types.GET_NOTIFICATION_LIST_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_NOTIFICATION_LIST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
function* getBlockUserList(params) {
  try {
    const res = yield API.getBlockUSerList();
    if (res) {
      yield put({
        type: types.GET_BLOCK_USER_LIST_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    yield put({
      type: types.GET_BLOCK_USER_LIST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

function* unBlockUserProfile(params) {
  try {
    const res = yield API.unBlockUSer();
    if (res) {
      yield put({
        type: types.UNBLOCK_USER_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.UNBLOCK_USER_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

function* blockUserProfile(params) {
  try {
    const res = yield API.blockUSer(params);
    // if (res) {
    yield put({
      type: types.BLOCK_USER_SUCCESS,
      payload: res,
    });
    params?.cbSuccess(res);
    // }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.BLOCK_USER_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

function* reportUserProfile(params) {
  try {
    const res = yield API.reportUSer(params);
    if (res) {
      yield put({
        type: types.REPORT_USER_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.REPORT_USER_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
function* readAllMessages(params) {
  try {
    const res = yield API.readMessages(params);
    if (res) {
      yield put({
        type: types.READ_MESSAGES_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.READ_MESSAGES_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
function* getAllMessages(params) {
  try {
    const res = yield API.getAllMessages(params);
    if (res) {
      yield put({
        type: types.GET_ALL_MESSAGES_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    yield put({
      type: types.GET_ALL_MESSAGES_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

function* getAllAdminMessages(params) {
  console.log('GET MEESage ADMIN SAGA', params);
  try {
    const res = yield API.getAllAdminMessages(params?.id);
    if (res) {
      yield put({
        type: types.GET_ALL_ADMIN_MESSAGES_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    yield put({
      type: types.GET_ALL_ADMIN_MESSAGES_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

function* deleteConversation(params) {
  try {
    const res = yield API.deleteConversation(params?.id);
    if (res) {
      yield put({
        type: types.DELETE_CONVERSATION_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.DELETE_CONVERSATION_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

function* createConversation(params) {
  try {
    const res = yield API.createConversation(params?.params);
    if (res) {
      yield put({
        type: types.CREATE_CONVERSATION_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.CREATE_CONVERSATION_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
function* createAdminConversation(params) {
  try {
    const res = yield API.createAdminConversation(params?.params);
    if (res) {
      yield put({
        type: types.CREATE_ADMIN_CONVERSATION_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.CREATE_ADMIN_CONVERSATION_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

function* getConversationList(params) {
  try {
    const res = yield API.getConversationList();
    if (res) {
      yield put({
        type: types.GET_CONVERSATION_LIST_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_CONVERSATION_LIST_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
function* sendMessages(params) {
  try {
    const res = yield API.send_message(params);
    if (res) {
      yield put({
        type: types.SEND_MESSAGES_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.SEND_MESSAGES_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}

function* sendMessagesToAdmin(params) {
  console.log('params send admin', params);
  try {
    const res = yield API.sendMessageToAdmin(params);
    if (res) {
      yield put({
        type: types.SEND_ADMIN_MESSAGES_SUCCESS,
        payload: res,
      });
      params?.cbSuccess(res);
    }
  } catch (error) {
    console.log(error);
    yield put({
      type: types.SEND_ADMIN_MESSAGES_FAILURE,
      payload: null,
    });
    let msg = responseValidator(error?.response?.status, error?.response?.data);
    params?.cbFailure(msg);
  }
}
