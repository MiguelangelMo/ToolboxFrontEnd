import dataReducer from '../../reducers/dataReducer';

describe('dataReducer', () => {
    it('return the initial state', () => {
        expect(dataReducer({}, {})).not.toBe({});
    })

    it('receives dataReducer', () => {
        expect(dataReducer({}, {
            type: 'TEST_LOCAL',
            data: 'MIguelangel Molero'
        })).toEqual({data: "MIguelangel Molero"});
    })
});