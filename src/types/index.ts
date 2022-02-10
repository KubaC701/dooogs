export interface ApiResponse<MessageType> {
  message: MessageType;
  status: string;
}

export type BreedsResponse = ApiResponse<Record<string, string[]>>;
export type BreedImageResponse = ApiResponse<string>;
