# API

| Property  | Description | Type                                  | Default     |
| --------- | ----------- | ------------------------------------- | ----------- |
| children  |             | `ReactNode`                           | -           |
| className |             | `string`                              | -           |
| style     |             | `CSSProperties`                       | -           |
| type      |             | `button` `submit` `reset` `undefined` | -           |
| onClose   |             | `(event: MouseEvent) => void`         | -           |
| disabled  |             | `boolean`                             | `false`     |
| fullWidth |             | `boolean`                             | `false`     |
| size      |             | `large` `medium` `small`              | `medium`    |
| variant   |             | `contained` `outlined` `text`         | `contained` |
| onClick   |             | `(event: MouseEvent) => void`         | -           |

## Demo

```javascript
<Button onClick={() => console.log('onClick')}>Click</Button>
```
