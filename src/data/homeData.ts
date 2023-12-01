import { BiSolidBeenHere } from "react-icons/bi";

export const homeData = {
    menu: [{ title: "Introduction", path: "#", Icon: BiSolidBeenHere }],
    intro: {
        title: "Introduction",
        data: `
					Galadriel.CSS is a dynamic styles library designed to empower developers in crafting efficient and modular CSS for their projects. Leveraging the flexibility of JavaScript objects, Galadriel.CSS seamlessly translates these structures into utility-first CSS classes, offering a powerful approach to styling web applications.

					**Built with Rust,** Galadriel.CSS is built using the Rust programming language.

					**Key Concepts**
					1. **Utility-First Approach:**
						- Galadriel.CSS adopts a utility-first methodology, where each CSS class represents a unique style, eliminating redundancy in CSS properties. For instance, the class representing 'display: flex' is unique within a file or a global stylesheet.

					2. **Flexible Styling Options:**
						- Developers have the freedom to choose between modular and global styles generation. Galadriel.CSS accommodates both preferences, allowing modular styles to be generated in the same directory as the triggering JavaScript or TypeScript file, or global styles to be specified in a 'galadriel.json' file.

					3. **Automatic File Handling:**
						- In modular mode, Galadriel.CSS automatically generates and saves the styles in a file with the same name as the triggering JavaScript or TypeScript file. Conversely, global styles are directed to a specified output path in the 'galadriel.json' file, streamlining the development process.

					**Build Process**
					- Galadriel.CSS operates independently during the build process. Whether through a development watcher or a build command, developers can effortlessly integrate Galadriel.CSS into their workflow for real-time or pre-production style generation.

					**Under the Hood**
					- Galadriel.CSS employs a babel plugin, created specifically for transforming style objects into corresponding utility-first class names during transpilation. The generation of the actual CSS file, including its class names, remains independent of this process.

					- Rust programming language plays a crucial role in building part of the Babel plugin, contributing to the efficient transformation of style objects into class names. Additionally, a future SWC plugin is planned to extend this functionality.

					**Availability**
					- Galadriel.CSS is available on npm under the name 'galadrielcss,' with frequent updates and improvements. While the library is still evolving, developers can explore the first beta version, experiment with its capabilities, and contribute to its growth.

					In essence, Galadriel.CSS marries technical precision with developer-centric flexibility, offering a compelling solution for modern web styling. Embrace the power to shape your styles dynamically with Galadriel.CSS.
				`.replaceAll("\t", "").trim(),
    },
};
