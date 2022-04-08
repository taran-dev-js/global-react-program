import React from 'react';
import {Modal} from "../components/Modal";
import {FormModal} from "../components/Modal/FormModal";
/**
 * @jest-environment jsdom
 */
describe('Add movie modal', () => {
    it('should render', () => {
        const modal = render(
            <Modal isOpen={true} title="Add movie">
                <FormModal />
            </Modal>);
        expect(modal).toMatchSnapshot();
    });
})