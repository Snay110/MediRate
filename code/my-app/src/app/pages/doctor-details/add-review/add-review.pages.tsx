import { useParams } from "react-router-dom";

export default function AddReviewPages() {
  const { id } = useParams<{ id: string }>();
  return <main>{id}</main>;
}

export const Component = AddReviewPages;
