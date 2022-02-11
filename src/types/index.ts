export interface ApiResponse<MessageType> {
  message: MessageType;
  status: string;
}

export type BreedsResponse = ApiResponse<Record<string, string[]>>;
export type BreedImageResponse = ApiResponse<string>;

interface BreedWithSubBreed {
  name: string;
  subBreed?: string;
}

export type Breed = string | BreedWithSubBreed;
