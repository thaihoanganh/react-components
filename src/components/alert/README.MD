# API

| Property  | Description | Type                        | Default |
| --------- | ----------- | --------------------------- | ------- |
| children  |             | ReactNode                   | -       |
| className |             | string                      | -       |
| style     |             | CSSProperties               | -       |
| closable  |             | boolean                     | `true`  |
| onClose   |             | (event: MouseEvent) => void | -       |

## Demo

```javascript
<Alert onClose={() => console.log('close')}>
    <div>Accordion Content</div>
</Alert>
```
