import { render } from '@testing-library/react';
import VideoPlayer from '../components/VideoPlayer';
import { trpc } from '@/utils/trpc';
import React from 'react';

jest.mock('@/utils/trpc', () => ({
  trpc: {
    getVideoViews: {
      useQuery: jest.fn().mockReturnValue({
        data: { "1": { views: 100, likes: 10 } },
      }),
    },
    incrementVideoView: {
      useMutation: jest.fn().mockReturnValue({
        mutate: jest.fn(),
      }),
    },
    incrementVideoLike: {
      useMutation: jest.fn().mockReturnValue({
        mutate: jest.fn(),
      }),
    },
  },
}));

// Test para verificar que la mutación se llama al montar el componente
test('llama a incrementViewMutation cuando se monta el video', () => {
  const mockMutate = jest.fn();

  (trpc.incrementVideoView.useMutation as jest.Mock).mockReturnValue({
    mutate: mockMutate,
  });

  render(<VideoPlayer src="video.mp4" videoId="1" />);

  expect(mockMutate).toHaveBeenCalledWith("1");
});

// Test para verificar el renderizado del video
test('renderiza el elemento de video con el src y los atributos correctos', () => {
  const { container } = render(<VideoPlayer src="video.mp4" videoId="1" />);

  const videoElement = container.querySelector('video');

  expect(videoElement).toBeInTheDocument();
  expect(videoElement).toHaveAttribute('src', 'video.mp4');
  expect(videoElement).toHaveAttribute('controls');
});

// Test para verificar el contador de vistas
test('muestra el contador de vistas correcto', () => {
  const { getByText } = render(<VideoPlayer src="video.mp4" videoId="1" />);

  expect(getByText('100 views')).toBeInTheDocument();
});
