
import { registerMediator } from 'openhim-mediator-utils'
import mediatorConfig from './../config/mediator.config.json'
import { config } from 'dotenv'

config()

const { OPENHIM_USERNAME, OPENHIM_PASSWORD, OPENHIM_URL, OPENHIM_SELF_SIGNED } = process.env

const openhimConfig = {
    username: OPENHIM_USERNAME,
    password: OPENHIM_PASSWORD,
    apiURL: OPENHIM_URL,
    trustSelfSigned: OPENHIM_SELF_SIGNED
}


registerMediator(openhimConfig, mediatorConfig, err => {
    if (err) {
        console.error('Mediatior registration failed', err)
    }
    console.log('New mediator registration successful');
})