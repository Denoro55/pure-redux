// CONSTANTS
export const Constants = {
    COUNTER_INC: 'COUNTER_INC',
    COUNTER_DEC: 'COUNTER_DEC'
};

// ACTIONS
export const actionCounterInc = () => ({
    type: Constants.COUNTER_INC
});

export const actionCounterDec = () => ({
    type: Constants.COUNTER_DEC
});
