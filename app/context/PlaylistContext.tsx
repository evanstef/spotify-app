'use client';

import React, { createContext, useContext, useState } from 'react';

type ObjectOnArray = {
  [key: string]: any[];
};

interface PlaylistContextData {
  playlist: ObjectOnArray[];
  value: string;
  handleSubmit: (e: React.FormEvent) => void;
  handleGetValue: (e: any) => void;
  handleDelete: (index: number) => void;
}

const PlaylistContext = createContext<PlaylistContextData>({} as PlaylistContextData);

const usePlaylist = () => {
  const context = useContext(PlaylistContext);

  if (!context) {
    throw new Error('usePlaylist must be used within a PlaylistProvider');
  }

  return context;
};

interface PlaylistProviderProps {
  children: React.ReactNode;
}

const PlaylistProvider: React.FC<PlaylistProviderProps> = ({ children }) => {
  const [playlist, setPlaylist] = useState<ObjectOnArray[]>([]);
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newObjectOnArray: ObjectOnArray = { [value]: [] };

    setPlaylist([...playlist, newObjectOnArray]);

    setValue('');
  };

  const handleGetValue = (e: any) => {
    setValue(e.target.value);
  };

  const handleDelete = (index: number) => {
    const newUpdate = playlist.filter((_, idx) => idx !== index);
    setPlaylist(newUpdate);
  };

  return (
    <PlaylistContext.Provider value={{ playlist, value, handleSubmit, handleGetValue, handleDelete }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export { PlaylistProvider, usePlaylist };