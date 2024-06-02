import {atom} from 'nanostores';

type InfoType = {
	MY_IP: string | null;
	MY_NAME: string | null;
};

export const $baseInfo = atom<InfoType>({
	MY_IP: null,
	MY_NAME: null,
});
