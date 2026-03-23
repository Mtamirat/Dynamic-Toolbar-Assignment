import AlertButton from './AlertButton';

function Toolbar() {
//   const buttons = [
//     { message: 'Downloading!', children: 'Download File' },
//     { message: 'Sharing!', children: 'Share Document' },
//     { message: 'Uploading!', children: 'Upload File' },
//   ];

  const buttons = [
    { message: '', children: 'Empty Message' },
    { message: 'No Label', children: '' },
    { message: null, children: 'Null Message' },
  ];

  return (
    <div>
      {buttons.map((btn, index) => (
        <AlertButton
          key={index}
          message={btn.message}
        >
          {btn.children}
        </AlertButton>
      ))}
    </div>
  );
}

export default Toolbar;