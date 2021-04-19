import React from 'react';
import { render, screen } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import GithubCommitHome from '../GithubCommit/GithubCommitHome';


configure({adapter: new Adapter()});
it('renders without crashing', () => {
  shallow(<GithubCommitHome/>)
});

it('renders title message', () => {
    render(<GithubCommitHome />);
    expect(screen.getByText('Github Commits App')).toBeInTheDocument();
  });
