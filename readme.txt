for build apk file or abb file 
--------------------------------

https://docs.expo.dev/build/setup/

run commands: 
1. npm install -g eas-cli
2. eas login
3. eas build:configure


for android
===========
4. eas build --platform android

for Ios
===========
4. eas build --platform ios --message "Some message"

Note : You can attach a message to the build by passing --message to the build command, for example, eas build --platform ios --message "Some message". The message will appear on the website. It comes in handy when you want to leave a note with the purpose of the build for your team.



Alternatively, you can use --platform all option to build for Android and iOS at the same time:
=================================================================================================
4. eas build --platform all





for React native all permissions 
====================================
https://reactnative.dev/docs/permissionsandroid#requestmultiple




Permissions that require prompting the user
Available as constants under PermissionsAndroid.PERMISSIONS:
================================================================

READ_CALENDAR: 'android.permission.READ_CALENDAR'
WRITE_CALENDAR: 'android.permission.WRITE_CALENDAR'
CAMERA: 'android.permission.CAMERA'
READ_CONTACTS: 'android.permission.READ_CONTACTS'
WRITE_CONTACTS: 'android.permission.WRITE_CONTACTS'
GET_ACCOUNTS: 'android.permission.GET_ACCOUNTS'
ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION'
ACCESS_COARSE_LOCATION: 'android.permission.ACCESS_COARSE_LOCATION'
ACCESS_BACKGROUND_LOCATION: 'android.permission.ACCESS_BACKGROUND_LOCATION'
RECORD_AUDIO: 'android.permission.RECORD_AUDIO'
READ_PHONE_STATE: 'android.permission.READ_PHONE_STATE'
CALL_PHONE: 'android.permission.CALL_PHONE'
READ_CALL_LOG: 'android.permission.READ_CALL_LOG'
WRITE_CALL_LOG: 'android.permission.WRITE_CALL_LOG'
ADD_VOICEMAIL: 'com.android.voicemail.permission.ADD_VOICEMAIL'
USE_SIP: 'android.permission.USE_SIP'
PROCESS_OUTGOING_CALLS: 'android.permission.PROCESS_OUTGOING_CALLS'
BODY_SENSORS: 'android.permission.BODY_SENSORS'
SEND_SMS: 'android.permission.SEND_SMS'
RECEIVE_SMS: 'android.permission.RECEIVE_SMS'
READ_SMS: 'android.permission.READ_SMS'
RECEIVE_WAP_PUSH: 'android.permission.RECEIVE_WAP_PUSH'
RECEIVE_MMS: 'android.permission.RECEIVE_MMS'
READ_EXTERNAL_STORAGE: 'android.permission.READ_EXTERNAL_STORAGE'
WRITE_EXTERNAL_STORAGE: 'android.permission.WRITE_EXTERNAL_STORAGE'
BLUETOOTH_CONNECT: 'android.permission.BLUETOOTH_CONNECT'
BLUETOOTH_SCAN: 'android.permission.BLUETOOTH_SCAN'
BLUETOOTH_ADVERTISE: 'android.permission.BLUETOOTH_ADVERTISE'
ACCESS_MEDIA_LOCATION: 'android.permission.ACCESS_MEDIA_LOCATION'
ACCEPT_HANDOVER: 'android.permission.ACCEPT_HANDOVER'
ACTIVITY_RECOGNITION: 'android.permission.ACTIVITY_RECOGNITION'
ANSWER_PHONE_CALLS: 'android.permission.ANSWER_PHONE_CALLS'
READ_PHONE_NUMBERS: 'android.permission.READ_PHONE_NUMBERS'
UWB_RANGING: 'android.permission.UWB_RANGING'
BODY_SENSORS_BACKGROUND: 'android.permission.BODY_SENSORS_BACKGROUND'
READ_MEDIA_IMAGES: 'android.permission.READ_MEDIA_IMAGES'
READ_MEDIA_VIDEO: 'android.permission.READ_MEDIA_VIDEO'
READ_MEDIA_AUDIO: 'android.permission.READ_MEDIA_AUDIO'
POST_NOTIFICATIONS: 'android.permission.POST_NOTIFICATIONS'
NEARBY_WIFI_DEVICES: 'android.permission.NEARBY_WIFI_DEVICES'
READ_VOICEMAIL: 'com.android.voicemail.permission.READ_VOICEMAIL',
WRITE_VOICEMAIL: 'com.android.voicemail.permission.WRITE_VOICEMAIL',



Result strings for requesting permissions
=========================================
Available as constants under PermissionsAndroid.RESULTS:

PermissionsAndroid.RESULTS
==========================
GRANTED: 'granted'
DENIED: 'denied'
NEVER_ASK_AGAIN: 'never_ask_again'