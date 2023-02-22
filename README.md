
# Exemple project REACT CI/CD with netifly

A brief description of what this project does and who it's for


## Install librarie

prettier

```bash
  npm install --save-dev --save-exact prettier
```
eslint

```bash
  npm install eslint --save-dev
  npx eslint --init
```

react router

```bash
  npm install react-router-dom@6
```

## Create test unitaire

Check props component

```javascript
  describe("TextComponent", () => {
  it("renders the provided text", () => {
    const text = "Hello, World!";
    render(<Text text={text} />);
    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
  });
});
```

## Create test unitaire
Creating the "node.js.toml" GitHub file by pressing the "action" button

## Add on netifly
Add the repository on netifly not to forget the file "netifly.tom".





