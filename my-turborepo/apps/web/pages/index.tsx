import { Button } from 'ui';
import { DEBUG } from 'docs/debug';

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
      <div>
        docsディレクトリからのinport:
        {DEBUG}
      </div>
    </div>
  );
}
