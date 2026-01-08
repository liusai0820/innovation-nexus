import cairo
import math

# Configuration
WIDTH, HEIGHT = 800, 450
BG_COLOR = (0.98, 0.976, 0.965) # #FAF9F6 Warm Off-White
PRIMARY_BLUE = (0.173, 0.243, 0.314) # #2C3E50 Slate Blue
PRIMARY_ORANGE = (0.902, 0.494, 0.133) # #E67E22 Persimmon Orange
SECONDARY_BLUE = (0.5, 0.6, 0.7) # Lighter muted blue
LIGHT_GREY = (0.9, 0.9, 0.9)

def hex_to_rgb(hex_str):
    hex_str = hex_str.lstrip('#')
    return tuple(int(hex_str[i:i+2], 16)/255.0 for i in (0, 2, 4))

def setup_surface(filename):
    surface = cairo.ImageSurface(cairo.FORMAT_ARGB32, WIDTH, HEIGHT)
    ctx = cairo.Context(surface)

    # Background
    ctx.set_source_rgb(*BG_COLOR)
    ctx.paint()

    return surface, ctx

def draw_rounded_rect(ctx, x, y, w, h, r):
    ctx.new_sub_path()
    ctx.arc(x + w - r, y + r, r, -math.pi / 2, 0)
    ctx.arc(x + w - r, y + h - r, r, 0, math.pi / 2)
    ctx.arc(x + r, y + h - r, r, math.pi / 2, math.pi)
    ctx.arc(x + r, y + r, r, math.pi, 3 * math.pi / 2)
    ctx.close_path()

def draw_consulting(filename):
    surface, ctx = setup_surface(filename)

    # Concept: Abstract documents aligning / Structural Analysis
    # A series of floating, overlapping rectangles (reports) organizing themselves

    # Draw subtle background grid
    ctx.set_source_rgb(0.95, 0.95, 0.94)
    ctx.set_line_width(1)
    for i in range(0, WIDTH, 40):
        ctx.move_to(i, 0)
        ctx.line_to(i, HEIGHT)
    ctx.stroke()

    # Main focus: A stack of "knowledge" cards

    # Card 1 (Bottom, Blue)
    ctx.save()
    ctx.translate(WIDTH/2 - 60, HEIGHT/2 - 40)
    ctx.rotate(math.radians(-10))
    draw_rounded_rect(ctx, -60, -80, 120, 160, 4)
    ctx.set_source_rgb(*SECONDARY_BLUE)
    ctx.fill_preserve()
    ctx.set_source_rgb(*PRIMARY_BLUE)
    ctx.set_line_width(2)
    ctx.stroke()
    ctx.restore()

    # Card 2 (Middle, Orange Accent)
    ctx.save()
    ctx.translate(WIDTH/2 + 40, HEIGHT/2 - 20)
    ctx.rotate(math.radians(5))
    draw_rounded_rect(ctx, -60, -80, 120, 160, 4)
    ctx.set_source_rgb(PRIMARY_ORANGE[0], PRIMARY_ORANGE[1], PRIMARY_ORANGE[2]) # Solid orange
    ctx.fill()
    ctx.restore()

    # Card 3 (Top, Main Blue, "The Insight")
    ctx.save()
    ctx.translate(WIDTH/2, HEIGHT/2)
    draw_rounded_rect(ctx, -60, -80, 120, 160, 4)
    ctx.set_source_rgb(*PRIMARY_BLUE)
    ctx.fill()

    # Content on top card (Abstract text lines)
    ctx.set_source_rgb(1, 1, 1) # White text lines
    for i in range(4):
        draw_rounded_rect(ctx, -40, -50 + i*20, 80, 8, 2)
        ctx.fill()

    # Magnifying glass / Focus element metaphor
    # A circle highlighting the structure
    ctx.arc(40, 40, 30, 0, 2*math.pi)
    ctx.set_line_width(4)
    ctx.set_source_rgb(*PRIMARY_ORANGE)
    ctx.stroke()

    ctx.restore()

    # Decorative geometric elements
    ctx.set_source_rgb(*PRIMARY_ORANGE)
    ctx.arc(WIDTH/2 - 150, HEIGHT/2 + 80, 10, 0, 2*math.pi)
    ctx.fill()

    ctx.set_source_rgb(*PRIMARY_BLUE)
    draw_rounded_rect(ctx, WIDTH/2 + 120, HEIGHT/2 - 100, 20, 20, 2)
    ctx.fill()

    surface.write_to_png(filename)
    print(f"Generated {filename}")

def draw_platform(filename):
    surface, ctx = setup_surface(filename)

    # Concept: Network / Dashboard / Data Flow
    # Nodes connected by lines

    center_x, center_y = WIDTH/2, HEIGHT/2

    # Central Hub
    ctx.set_line_width(3)
    ctx.set_source_rgb(*PRIMARY_BLUE)
    ctx.arc(center_x, center_y, 40, 0, 2*math.pi)
    ctx.stroke()

    # Inner hub fill
    ctx.arc(center_x, center_y, 25, 0, 2*math.pi)
    ctx.set_source_rgb(*PRIMARY_ORANGE)
    ctx.fill()

    # Nodes positions
    nodes = [
        (center_x - 120, center_y - 60),
        (center_x - 100, center_y + 80),
        (center_x + 120, center_y - 80),
        (center_x + 140, center_y + 50),
        (center_x, center_y - 130),
        (center_x - 180, center_y + 10)
    ]

    # Draw connections first (behind nodes)
    ctx.set_line_width(2)
    ctx.set_source_rgb(*SECONDARY_BLUE)
    for nx, ny in nodes:
        ctx.move_to(center_x, center_y)
        ctx.line_to(nx, ny)
        ctx.stroke()

        # Inter-node connections
        if nodes.index((nx, ny)) % 2 == 0:
             next_node = nodes[(nodes.index((nx, ny)) + 1) % len(nodes)]
             ctx.move_to(nx, ny)
             ctx.line_to(next_node[0], next_node[1])
             ctx.set_dash([5, 5])
             ctx.stroke()
             ctx.set_dash([])

    # Draw Nodes
    for i, (nx, ny) in enumerate(nodes):
        ctx.arc(nx, ny, 12, 0, 2*math.pi)
        ctx.set_source_rgb(1, 1, 1)
        ctx.fill_preserve()
        ctx.set_line_width(3)
        if i % 2 == 0:
            ctx.set_source_rgb(*PRIMARY_BLUE)
        else:
            ctx.set_source_rgb(*PRIMARY_ORANGE)
        ctx.stroke()

        # Icon inside node (simple dot)
        ctx.arc(nx, ny, 4, 0, 2*math.pi)
        if i % 2 == 0:
             ctx.set_source_rgb(*PRIMARY_BLUE)
        else:
             ctx.set_source_rgb(*PRIMARY_ORANGE)
        ctx.fill()

    # Data Dashboard hint (bottom right)
    draw_rounded_rect(ctx, WIDTH - 150, HEIGHT - 100, 100, 60, 4)
    ctx.set_source_rgba(*PRIMARY_BLUE + (0.1,)) # transparent fill
    ctx.fill_preserve()
    ctx.set_source_rgb(*PRIMARY_BLUE)
    ctx.set_line_width(1)
    ctx.stroke()

    # Bar chart lines
    ctx.set_line_width(6)
    ctx.move_to(WIDTH - 135, HEIGHT - 50)
    ctx.line_to(WIDTH - 135, HEIGHT - 70)
    ctx.stroke()
    ctx.move_to(WIDTH - 115, HEIGHT - 50)
    ctx.line_to(WIDTH - 115, HEIGHT - 80)
    ctx.stroke()
    ctx.set_source_rgb(*PRIMARY_ORANGE)
    ctx.move_to(WIDTH - 95, HEIGHT - 50)
    ctx.line_to(WIDTH - 95, HEIGHT - 60)
    ctx.stroke()

    surface.write_to_png(filename)
    print(f"Generated {filename}")

def draw_innovation(filename):
    surface, ctx = setup_surface(filename)

    # Concept: Tools / Blueprint / Construction
    # Geometric primitives assembling

    # Background "blueprint" lines
    ctx.set_source_rgba(*SECONDARY_BLUE + (0.3,))
    ctx.set_line_width(1)
    ctx.arc(WIDTH/2, HEIGHT/2, 100, 0, 2*math.pi)
    ctx.stroke()
    ctx.arc(WIDTH/2, HEIGHT/2, 150, 0, 2*math.pi)
    ctx.set_dash([10, 10])
    ctx.stroke()
    ctx.set_dash([])

    # Central Composition: A complex shape being built

    # Base Block (Blue Cube representation, flat)
    ctx.save()
    ctx.translate(WIDTH/2, HEIGHT/2 + 20)

    # Main Hexagon shape (isometric feel)
    size = 60
    ctx.move_to(0, size)
    for i in range(1, 7):
        angle = i * math.pi / 3 + math.pi/2
        ctx.line_to(size * math.cos(angle), size * math.sin(angle))
    ctx.close_path()
    ctx.set_source_rgb(*PRIMARY_BLUE)
    ctx.fill()

    # "Tool" acting on it - Orange Wrench/Gear segment
    ctx.translate(80, -80)
    ctx.rotate(math.pi/4)

    # Gear segment
    ctx.arc(0, 0, 40, 0, math.pi)
    ctx.set_line_width(15)
    ctx.set_source_rgb(*PRIMARY_ORANGE)
    ctx.stroke()

    ctx.restore()

    # Floating modular components

    # Component 1: Top Left
    ctx.save()
    ctx.translate(WIDTH/2 - 100, HEIGHT/2 - 60)
    draw_rounded_rect(ctx, 0, 0, 40, 40, 4)
    ctx.set_source_rgb(*PRIMARY_ORANGE)
    ctx.fill()
    # Connector line
    ctx.move_to(40, 40)
    ctx.line_to(80, 80) # Towards center
    ctx.set_source_rgb(*SECONDARY_BLUE)
    ctx.set_line_width(2)
    ctx.set_dash([4, 4])
    ctx.stroke()
    ctx.restore()

    # Component 2: Right
    ctx.save()
    ctx.translate(WIDTH/2 + 80, HEIGHT/2 + 10)
    ctx.arc(0, 0, 20, 0, 2*math.pi)
    ctx.set_source_rgb(1, 1, 1)
    ctx.fill_preserve()
    ctx.set_line_width(3)
    ctx.set_source_rgb(*SECONDARY_BLUE)
    ctx.stroke()
    ctx.restore()

    # "Spark" of innovation
    ctx.save()
    ctx.translate(WIDTH/2, HEIGHT/2 - 80)
    # Draw a star/spark
    ctx.move_to(0, -20)
    ctx.line_to(5, -5)
    ctx.line_to(20, 0)
    ctx.line_to(5, 5)
    ctx.line_to(0, 20)
    ctx.line_to(-5, 5)
    ctx.line_to(-20, 0)
    ctx.line_to(-5, -5)
    ctx.close_path()
    ctx.set_source_rgb(*PRIMARY_ORANGE)
    ctx.fill()
    ctx.restore()

    surface.write_to_png(filename)
    print(f"Generated {filename}")

if __name__ == "__main__":
    draw_consulting("image_1_consulting.png")
    draw_platform("image_2_platform.png")
    draw_innovation("image_3_innovation.png")
