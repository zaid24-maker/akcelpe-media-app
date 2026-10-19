'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';

const KitContext = createContext(null);

// Header, Hub, Resources aur Video modal ke beech shared state
export function KitProvider({ children }) {
  const [tab, setTab] = useState('social');
  const [demoOpen, setDemoOpen] = useState(false);
  const openDemo = useCallback(() => setDemoOpen(true), []);
  const closeDemo = useCallback(() => setDemoOpen(false), []);

  const value = useMemo(
    () => ({ tab, setTab, demoOpen, openDemo, closeDemo }),
    [tab, demoOpen, openDemo, closeDemo]
  );

  return <KitContext.Provider value={value}>{children}</KitContext.Provider>;
}

export function useKit() {
  return useContext(KitContext);
}
