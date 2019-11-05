import { MediaItem } from '../../../../types';

export type MediaGridState =
  | { state: 'PENDING' }
  | { state: 'SUCCESS'; data: MediaItem[] }
  | { state: 'ERROR'; error: Error };
