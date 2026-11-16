import React, { useState } from 'react';
import { Receipt, Calendar, BookOpen, Bell, Sun, Moon, Check, Sparkles } from 'lucide-react';

export const MockupReceipts: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'receipt' | 'braindump'>('receipt');
  const [settledStatus, setSettledStatus] = useState<'open' | 'WIN' | 'LOSS'>('open');
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Read 15 pages', tag: '7-Day Goal', done: true },
    { id: 2, title: '30m Figma design sprint', tag: 'Daily', done: true },
    { id: 3, title: 'No sugar after 8 PM', tag: 'Monthly Goal', done: false },
  ]);

  const toggleTask = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    if (settledStatus !== 'open') return;
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const handleSettle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (settledStatus !== 'open') {
      setSettledStatus('open');
      return;
    }
    const allDone = tasks.every((t) => t.done);
    setSettledStatus(allDone ? 'WIN' : 'LOSS');
  };

  const completedCount = tasks.filter((t) => t.done).length;

  const calendarDays = [
    { day: 'M', num: '11', state: 'settled-win' },
    { day: 'T', num: '12', state: 'settled-win' },
    { day: 'W', num: '13', state: 'settled-loss' },
    { day: 'T', num: '14', state: 'open' },
    { day: 'F', num: '15', state: 'today' },
  ];

  return (
    <div
      className={`w-full h-full rounded-2xl p-3 sm:p-4 flex flex-col justify-between select-none overflow-hidden relative border transition-colors duration-300 ${
        darkMode
          ? 'bg-[#1D2114] border-[#3E472A] text-[#F5F5F0]'
          : 'bg-[#EDE8DC] border-[#D5CEBD] text-[#2D3319]'
      }`}
    >
      {/* Subtle Background Dot Matrix */}
      <div
        className={`absolute inset-0 [background-size:16px_16px] pointer-events-none ${
          darkMode
            ? 'bg-[radial-gradient(#8B9E4B_1px,transparent_1px)] opacity-10'
            : 'bg-[radial-gradient(#5F6B12_1px,transparent_1px)] opacity-15'
        }`}
      />

      {/* Top Mini Bar */}
      <div
        className={`relative z-10 flex items-center justify-between px-3 py-2 rounded-xl border shadow-xs backdrop-blur-md ${
          darkMode
            ? 'bg-[#282E1C]/95 border-[#3E472A]'
            : 'bg-white/95 border-[#E2DCCE]'
        }`}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#5F6B12] text-white flex items-center justify-center shadow-xs">
            <Receipt className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[12px] font-bold tracking-tight leading-none font-display uppercase">
              RECEIPTS
            </div>
            <div className={`text-[10px] font-medium ${darkMode ? 'text-[#C8D49E]' : 'text-[#5F6B12]'}`}>
              Keep your word to yourself
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Tab switcher */}
          <div
            className={`flex items-center gap-0.5 p-0.5 rounded-lg border text-[10px] font-bold ${
              darkMode
                ? 'bg-[#1D2114] border-[#3E472A]'
                : 'bg-[#FAF8F2] border-[#E2DCCE]'
            }`}
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab('receipt');
              }}
              className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                activeTab === 'receipt'
                  ? 'bg-[#5F6B12] text-white'
                  : darkMode
                  ? 'text-[#C8D49E]'
                  : 'text-[#495622]'
              }`}
            >
              Receipt
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab('braindump');
              }}
              className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                activeTab === 'braindump'
                  ? 'bg-[#5F6B12] text-white'
                  : darkMode
                  ? 'text-[#C8D49E]'
                  : 'text-[#495622]'
              }`}
            >
              Brain Dump
            </button>
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
            }}
            className={`w-6 h-6 rounded-lg flex items-center justify-center border ${
              darkMode
                ? 'bg-[#1D2114] border-[#3E472A] text-[#C8D49E]'
                : 'bg-[#FAF8F2] border-[#E2DCCE] text-[#5F6B12]'
            }`}
            aria-label="Notifications"
          >
            <Bell className="w-3 h-3" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setDarkMode((d) => !d);
            }}
            className={`w-6 h-6 rounded-lg flex items-center justify-center border cursor-pointer transition-colors ${
              darkMode
                ? 'bg-[#5F6B12] border-[#8B9E4B] text-white'
                : 'bg-[#FAF8F2] border-[#E2DCCE] text-[#2D3319]'
            }`}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-3 h-3" /> : <Moon className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {activeTab === 'receipt' ? (
        <div className="relative z-10 my-2 flex flex-col gap-2 flex-1 justify-center">
          {/* Calendar strip with Today / Settled / Open states */}
          <div
            className={`grid grid-cols-5 gap-1.5 p-2 rounded-xl border ${
              darkMode
                ? 'bg-[#282E1C]/90 border-[#3E472A]'
                : 'bg-white/90 border-[#D5CEBD]'
            }`}
          >
            {calendarDays.map((item) => {
              const isToday = item.state === 'today';
              const isWin = item.state === 'settled-win';
              const isLoss = item.state === 'settled-loss';
              return (
                <div
                  key={item.num}
                  className={`rounded-lg py-1 px-1 flex flex-col items-center justify-center text-center border ${
                    isToday
                      ? 'bg-[#5F6B12] text-white border-[#5F6B12]'
                      : darkMode
                      ? 'bg-[#1D2114] border-[#3E472A]'
                      : 'bg-[#FAF8F2] border-[#E5E0D3]'
                  }`}
                >
                  <span className="text-[9px] font-bold opacity-75">{item.day}</span>
                  <span className="text-[11px] font-extrabold leading-tight">{item.num}</span>
                  <span
                    className={`text-[8px] font-bold uppercase mt-0.5 px-1 rounded ${
                      isToday
                        ? 'bg-white/20 text-white'
                        : isWin
                        ? 'bg-emerald-500/15 text-emerald-600'
                        : isLoss
                        ? 'bg-rose-500/15 text-rose-500'
                        : 'bg-amber-500/15 text-amber-600'
                    }`}
                  >
                    {isToday ? 'Today' : isWin || isLoss ? 'Settled' : 'Open'}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Receipt Card */}
          <div
            className={`relative rounded-xl p-3 border shadow-xs font-mono ${
              darkMode
                ? 'bg-[#242919] border-[#3E472A] text-[#F5F5F0]'
                : 'bg-[#FFFEFA] border-dashed border-[#B8B2A2] text-[#2D3319]'
            }`}
          >
            {/* WIN / LOSS Stamp */}
            {settledStatus !== 'open' && (
              <div
                className={`absolute top-2.5 right-3 px-2.5 py-0.5 rounded-md border-2 text-xs font-black tracking-widest rotate-[-6deg] ${
                  settledStatus === 'WIN'
                    ? 'border-emerald-600 text-emerald-600 bg-emerald-50/90'
                    : 'border-rose-600 text-rose-600 bg-rose-50/90'
                }`}
              >
                {settledStatus}
              </div>
            )}

            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-dashed border-current/20">
              <span className="text-[10px] font-bold uppercase tracking-wider">
                RECEIPT #042 • TODAY
              </span>
              <span className="text-[10px] font-bold opacity-70">
                {completedCount}/{tasks.length} KEPT
              </span>
            </div>

            <div className="space-y-1.5">
              {tasks.map((task) => (
                <button
                  key={task.id}
                  type="button"
                  onClick={(e) => toggleTask(e, task.id)}
                  className="w-full flex items-center justify-between text-left gap-2 py-0.5 cursor-pointer group"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className={`w-3.5 h-3.5 rounded flex items-center justify-center border shrink-0 transition-colors ${
                        task.done
                          ? 'bg-[#5F6B12] border-[#5F6B12] text-white'
                          : darkMode
                          ? 'border-[#6A7844]'
                          : 'border-[#9BA08B]'
                      }`}
                    >
                      {task.done && <Check className="w-2.5 h-2.5" />}
                    </span>
                    <span
                      className={`text-[11px] truncate ${
                        task.done ? 'line-through opacity-60' : 'font-semibold'
                      }`}
                    >
                      {task.title}
                    </span>
                  </div>
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded font-sans font-bold shrink-0 ${
                      darkMode
                        ? 'bg-[#353D25] text-[#C8D49E]'
                        : 'bg-[#F0F3E4] text-[#5F6B12]'
                    }`}
                  >
                    {task.tag}
                  </span>
                </button>
              ))}
            </div>

            <div className="pt-2 mt-2 border-t border-dashed border-current/20 flex items-center justify-between">
              <span className="text-[10px] opacity-70 font-sans">
                {settledStatus === 'open' ? 'Close your day honestly' : 'Tap to reopen receipt'}
              </span>
              <button
                type="button"
                onClick={handleSettle}
                className="px-2.5 py-1 rounded-lg bg-[#5F6B12] hover:bg-[#4E580D] text-white font-sans text-[10px] font-bold uppercase tracking-wider cursor-pointer transition-colors"
              >
                {settledStatus === 'open' ? 'Settle Today' : 'Reset'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* Brain Dump Notebook View */
        <div
          className={`relative z-10 my-2 flex-1 rounded-xl p-3 border flex flex-col justify-between ${
            darkMode
              ? 'bg-[#242919] border-[#3E472A]'
              : 'bg-[#FFFEFA] border-[#D5CEBD]'
          }`}
        >
          <div className="space-y-2">
            <div className="flex items-center justify-between border-b pb-1.5 border-current/10">
              <span className="text-[11px] font-bold flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#5F6B12]" />
                Brain Dump Notebook
              </span>
              <span className="text-[9px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#5F6B12]/15 text-[#5F6B12]">
                Past Reflections
              </span>
            </div>

            <div
              className={`p-2 rounded-lg text-[11px] leading-relaxed border ${
                darkMode
                  ? 'bg-[#1D2114] border-[#3E472A] text-[#E6EAD8]'
                  : 'bg-[#FAF8F2] border-[#E5E0D3] text-[#2D3319]'
              }`}
            >
              “Saying no to late scrolling helped me settle two WIN days in a row. Keeping commitments small made them real.”
            </div>

            <div className="grid grid-cols-2 gap-1.5 text-[10px]">
              <div
                className={`p-2 rounded-lg border ${
                  darkMode ? 'bg-[#1D2114] border-[#3E472A]' : 'bg-white border-[#E5E0D3]'
                }`}
              >
                <span className="font-bold text-emerald-600 block">Nov 12 • WIN</span>
                <span className="opacity-75">3/3 commitments kept</span>
              </div>
              <div
                className={`p-2 rounded-lg border ${
                  darkMode ? 'bg-[#1D2114] border-[#3E472A]' : 'bg-white border-[#E5E0D3]'
                }`}
              >
                <span className="font-bold text-rose-500 block">Nov 13 • LOSS</span>
                <span className="opacity-75">Missed evening workout</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Status Bar */}
      <div
        className={`relative z-10 flex items-center justify-between px-3 py-1.5 rounded-xl border text-[10px] font-semibold ${
          darkMode
            ? 'bg-[#282E1C]/90 border-[#3E472A] text-[#C8D49E]'
            : 'bg-white/90 border-[#D5CEBD] text-[#495622]'
        }`}
      >
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3 text-[#5F6B12]" />
          Auto-repeat: 7d / Monthly / Yearly
        </span>
        <span className="flex items-center gap-1 font-bold text-[#5F6B12]">
          <Sparkles className="w-3 h-3" />
          Interactive Preview
        </span>
      </div>
    </div>
  );
};
