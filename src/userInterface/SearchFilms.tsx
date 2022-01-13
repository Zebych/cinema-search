import React, {
  ChangeEvent,
  ReactElement,
  KeyboardEvent,
  useCallback,
  useState,
} from 'react';

import { API } from '../api/API';

// import { useDispatch } from 'react-redux';

export const SearchFilms = (): ReactElement => {
  // const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const [error, setError] = useState<string | null>(null);

  const onTitleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTitle(event.currentTarget.value);
    },
    [title],
  );

  const onButtonClick = (): any => {
    if (title.trim() !== '') {
      API.searchFilmsByTitle(title).then(({ data }: any) => {
        const { Search, Response, Error } = data;
        if (Response === 'True') {
          setSearchResult(JSON.stringify(Search));
        } else {
          setSearchResult(Error);
        }
      });
      setTitle('');
    } else {
      setError('Title is required');
    }
  };

  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>): any => {
    if (error !== null) {
      setError(null);
    }
    if (e.key === 'Enter') {
      onButtonClick();
    }
  };

  return (
    <div>
      <input type="text" value={title} onChange={onTitleChange} onKeyPress={onKeyPress} />
      <button type="button" onClick={onButtonClick}>
        search
      </button>
      {searchResult}
    </div>
  );
};
