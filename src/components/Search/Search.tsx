import React from 'react';
import style from './Search.module.css';

export interface SearchProps {
  [key: string]: string;
}

export interface FormPageStateProps {
  searchQuery: string;
}

export class Search extends React.Component<SearchProps, FormPageStateProps> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchQuery: localStorage.getItem('searchQuery')
        ? (localStorage.getItem('searchQuery') as string)
        : '',
    };
  }

  onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchQuery: e.target.value });
  };

  submit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.preventDefault();
    localStorage.setItem('searchQuery', this.state.searchQuery);
  };

  componentWillUnmount = (): void => {
    localStorage.setItem('searchQuery', this.state.searchQuery);
  };

  render() {
    return (
      <form className={style.search}>
        <input
          type="text"
          name="headerSearch"
          id="headerSearch"
          onChange={this.onChangeHandler}
          value={this.state.searchQuery}
        />
        <button type="submit" onClick={this.submit}>
          Search
        </button>
      </form>
    );
  }
}
