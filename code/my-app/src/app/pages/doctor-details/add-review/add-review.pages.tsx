import { useParams } from "react-router-dom";

export default function AddReviewPage() {
  const { id } = useParams<{ id: string }>();
  return <main>{id}</main>;
}

export const Component = AddReviewPage;
