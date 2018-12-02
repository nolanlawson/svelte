export default {
	globalCSS: true,
	warnings: [
		{
			code: "css-unused-selector",
			end: {
				character: 63,
				column: 6,
				line: 5
			},
			frame: "3:\n4: <style>\n5:   .blue {\n     ^\n6:     color: red;\n7:   }",
			message: "Unused CSS selector",
			pos: 58,
			start: {
				character: 58,
				column: 1,
				line: 5
			}
		},
		{
			code: "css-unused-selector",
			end: {
				character: 89,
				column: 5,
				line: 9
			},
			frame: " 7:   }\n 8:\n 9:   .red {\n      ^\n10:     color: blue;\n11:   }",
			message: "Unused CSS selector",
			pos: 85,
			start: {
				character: 85,
				column: 1,
				line: 9
			}
		},
		{
			code: "css-unused-selector",
			end: {
				character: 121,
				column: 10,
				line: 13
			},
			frame: "11:   }\n12:\n13:   .blue.red {\n      ^\n14:     font-weight: bold;\n15:   }",
			message: "Unused CSS selector",
			pos: 112,
			start: {
				character: 112,
				column: 1,
				line: 13
			}
		}
	]
};
