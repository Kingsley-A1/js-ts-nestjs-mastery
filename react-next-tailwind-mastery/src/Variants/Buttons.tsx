import Button from "@/colours/button";

export default function ButtonVariants() {
  return (
    <div className="flex gap-3">
      <Button variant="primary">Buy Now</Button>
      <Button variant="secondary">Add to Cart</Button>
      <Button variant="danger">Remove Item</Button>
    </div>
  );
}