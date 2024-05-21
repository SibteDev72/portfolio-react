import { create } from "zustand";

export const useStore = create((set) => ({
    projectObject: {},
    isModelOpen: false,
    btnType: 'None',
    openModel: (project, btnVal) => set(() => ({ projectObject: {project}, 
        isModelOpen: true, 
        btnType: btnVal
    })),
    closeModel: () => set(() => ({ isModelOpen: false })),
}));