import data from './data.json';

const STATES = {
    PROCESSING: 'processing',
    SUCCESS: 'success',
    ERROR: 'error',
}

const ERRORS = {
    NO_STOCK: 'No stock has been found',
    INCORRECT_DETAILS: 'Incorrect details have been entered',
}

const PROCESSING_DELAY = 2000;

async function getProcessingPage(data) {


    for (let i = 0; i < data.length; i++) {
        let input = data[i];
        switch (input.state) {
            case STATES.PROCESSING:
                console.log('processing')
                await delay(PROCESSING_DELAY);
                console.log('processing complete')
                break;
            case STATES.SUCCESS:
                console.log('success')
                return {title: 'Order complete', message: null}
                break;
            case STATES.ERROR:
                console.log('error')
                const message = getErrorMessage(input.message);
                return {title: 'Error page', message}
                break;
            default:
                break;
        }
    }
}

function getErrorMessage(errorCode) {
    return ERRORS[errorCode] ? ERRORS[errorCode] : null
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
    console.log(await getProcessingPage(data))
})()
