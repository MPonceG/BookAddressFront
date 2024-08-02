import { render } from "@testing-library/react";
import { PageListPerson } from "../../pages/Person/ListPerson";

describe('Test the list person component', () => {
    test('Need to render some data', () => {
        const { container } = render(<PageListPerson />);
        expect(container).toMatchSnapshot();
    });
});