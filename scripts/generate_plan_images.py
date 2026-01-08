import cairo
import math

# Configuration
WIDTH, HEIGHT = 800, 450 # 16:9 Aspect Ratio
BG_COLOR = (0.98, 0.976, 0.965) # #FAF9F6 Warm Off-White
PRIMARY_BLUE = (0.173, 0.243, 0.314) # #2C3E50 Slate Blue
PRIMARY_ORANGE = (0.902, 0.494, 0.133) # #E67E22 Persimmon Orange
SECONDARY_BLUE = (0.5, 0.6, 0.7) # Lighter muted blue

def setup_surface(filename):
    surface = cairo.ImageSurface(cairo.FORMAT_ARGB32, WIDTH, HEIGHT)
    ctx = cairo.Context(surface)
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

def draw_product_matrix(filename):
    # Concept: Standardization & Replication (Grid of Boxes)
    surface, ctx = setup_surface(filename)

    # Background Grid
    ctx.set_source_rgb(0.9, 0.9, 0.9)
    ctx.set_line_width(1)
    grid_size = 40
    for x in range(0, WIDTH, grid_size):
        ctx.move_to(x, 0); ctx.line_to(x, HEIGHT)
    for y in range(0, HEIGHT, grid_size):
        ctx.move_to(0, y); ctx.line_to(WIDTH, y)
    ctx.stroke()

    # Main Product (Center)
    cx, cy = WIDTH/2, HEIGHT/2
    box_size = 80

    # "Shadow" / Replicated instances
    offsets = [(-100, -40), (100, -40), (-100, 110), (100, 110)]
    for ox, oy in offsets:
        ctx.save()
        ctx.translate(cx + ox, cy + oy)
        draw_rounded_rect(ctx, -box_size/2, -box_size/2, box_size, box_size, 8)
        ctx.set_source_rgba(*SECONDARY_BLUE + (0.3,)) # Ghosted
        ctx.set_line_width(2)
        ctx.stroke()
        # Internal detail
        ctx.move_to(-20, 0); ctx.line_to(20, 0)
        ctx.move_to(0, -20); ctx.line_to(0, 20)
        ctx.stroke()
        ctx.restore()

    # Central "Master" Product
    ctx.save()
    ctx.translate(cx, cy)
    draw_rounded_rect(ctx, -box_size/2 - 10, -box_size/2 - 10, box_size + 20, box_size + 20, 12)
    ctx.set_source_rgb(*PRIMARY_BLUE)
    ctx.fill()

    # Orange accent inside
    draw_rounded_rect(ctx, -20, -20, 40, 40, 6)
    ctx.set_source_rgb(*PRIMARY_ORANGE)
    ctx.fill()
    ctx.restore()

    # Connection lines
    ctx.set_source_rgba(*PRIMARY_BLUE + (0.5,))
    ctx.set_line_width(2)
    ctx.set_dash([5, 5])
    for ox, oy in offsets:
        ctx.move_to(cx, cy)
        ctx.line_to(cx + ox, cy + oy)
        ctx.stroke()

    surface.write_to_png(filename)

def draw_gov_solutions(filename):
    # Concept: Pillars / Structure / Stability
    surface, ctx = setup_surface(filename)

    cx, cy = WIDTH/2, HEIGHT/2 + 50

    # Pediment (Triangle Top)
    ctx.move_to(cx, cy - 180)
    ctx.line_to(cx + 140, cy - 100)
    ctx.line_to(cx - 140, cy - 100)
    ctx.close_path()
    ctx.set_source_rgb(*PRIMARY_BLUE)
    ctx.fill()

    # Orange "Eye" or centerpiece in pediment
    ctx.arc(cx, cy - 130, 15, 0, 2*math.pi)
    ctx.set_source_rgb(*PRIMARY_ORANGE)
    ctx.fill()

    # Pillars
    pillar_w = 30
    pillar_h = 160
    spacing = 60
    start_x = cx - 120

    for i in range(4):
        x = start_x + i * (pillar_w + 40)
        draw_rounded_rect(ctx, x, cy - 90, pillar_w, pillar_h, 4)
        # Gradient effect manually
        pat = cairo.LinearGradient(x, cy-90, x+pillar_w, cy-90)
        pat.add_color_stop_rgb(0, *SECONDARY_BLUE)
        pat.add_color_stop_rgb(1, *PRIMARY_BLUE)
        ctx.set_source(pat)
        ctx.fill()

    # Base (Steps)
    ctx.set_source_rgb(*PRIMARY_BLUE)
    draw_rounded_rect(ctx, cx - 160, cy + 70, 320, 20, 4)
    ctx.fill()
    draw_rounded_rect(ctx, cx - 180, cy + 90, 360, 20, 4)
    ctx.set_source_rgba(*PRIMARY_BLUE + (0.8,))
    ctx.fill()

    # Abstract "Data" flowing through pillars
    ctx.set_source_rgba(*PRIMARY_ORANGE + (0.6,))
    ctx.set_line_width(2)
    ctx.move_to(cx - 200, cy)
    ctx.curve_to(cx - 100, cy - 40, cx + 100, cy + 40, cx + 200, cy)
    ctx.stroke()

    surface.write_to_png(filename)

def draw_enterprise_consulting(filename):
    # Concept: Growth / Steps / Ascent
    surface, ctx = setup_surface(filename)

    cx, cy = WIDTH/2, HEIGHT/2 + 60

    # Steps rising
    step_w = 60
    step_h = 40
    num_steps = 5

    start_x = cx - (num_steps * step_w) / 2

    for i in range(num_steps):
        h = (i + 1) * step_h * 1.5
        x = start_x + i * step_w
        y = cy - h

        draw_rounded_rect(ctx, x, y, step_w - 10, h, 4)

        # Color progression
        if i == num_steps - 1:
            ctx.set_source_rgb(*PRIMARY_ORANGE) # Top step is orange
        else:
            # Fade from secondary to primary blue
            ratio = i / (num_steps - 1)
            r = SECONDARY_BLUE[0] * (1-ratio) + PRIMARY_BLUE[0] * ratio
            g = SECONDARY_BLUE[1] * (1-ratio) + PRIMARY_BLUE[1] * ratio
            b = SECONDARY_BLUE[2] * (1-ratio) + PRIMARY_BLUE[2] * ratio
            ctx.set_source_rgb(r, g, b)

        ctx.fill()

    # Arrow indicating trajectory
    ctx.set_source_rgb(*PRIMARY_BLUE)
    ctx.set_line_width(4)
    ctx.move_to(start_x - 20, cy)
    # Control points for a smooth curve up
    ctx.curve_to(start_x + 100, cy, cx + 50, cy - 200, cx + 180, cy - 250)
    ctx.stroke()

    # Arrowhead
    ctx.save()
    ctx.translate(cx + 180, cy - 250)
    ctx.rotate(-0.5) # Approximate angle
    ctx.move_to(0, 0)
    ctx.line_to(-15, 5)
    ctx.line_to(-15, -5)
    ctx.close_path()
    ctx.fill()
    ctx.restore()

    surface.write_to_png(filename)

def draw_ecosystem(filename):
    # Concept: Connection / Ring / Nodes
    surface, ctx = setup_surface(filename)

    cx, cy = WIDTH/2, HEIGHT/2
    radius = 100

    # Central ring
    ctx.arc(cx, cy, radius, 0, 2*math.pi)
    ctx.set_source_rgba(*SECONDARY_BLUE + (0.2,))
    ctx.set_line_width(40)
    ctx.stroke()

    # Nodes on the ring
    num_nodes = 6
    for i in range(num_nodes):
        angle = i * (2 * math.pi / num_nodes)
        nx = cx + radius * math.cos(angle)
        ny = cy + radius * math.sin(angle)

        # Connecting lines to center
        ctx.move_to(cx, cy)
        ctx.line_to(nx, ny)
        ctx.set_source_rgba(*SECONDARY_BLUE + (0.5,))
        ctx.set_line_width(2)
        ctx.stroke()

        # Node
        ctx.arc(nx, ny, 20, 0, 2*math.pi)
        ctx.set_source_rgb(1, 1, 1) # White fill
        ctx.fill_preserve()

        ctx.set_line_width(4)
        if i % 2 == 0:
            ctx.set_source_rgb(*PRIMARY_BLUE)
        else:
            ctx.set_source_rgb(*PRIMARY_ORANGE)
        ctx.stroke()

    # Center Hub
    ctx.arc(cx, cy, 40, 0, 2*math.pi)
    ctx.set_source_rgb(*PRIMARY_BLUE)
    ctx.fill()

    # Handshake symbol (abstract)
    ctx.set_source_rgb(1, 1, 1)
    ctx.set_line_width(4)
    ctx.move_to(cx - 15, cy + 5)
    ctx.line_to(cx - 5, cy - 5)
    ctx.line_to(cx + 5, cy + 5)
    ctx.line_to(cx + 15, cy - 5)
    ctx.stroke()

    surface.write_to_png(filename)

if __name__ == "__main__":
    draw_product_matrix("plan_1_product.png")
    draw_gov_solutions("plan_2_gov.png")
    draw_enterprise_consulting("plan_3_enterprise.png")
    draw_ecosystem("plan_4_ecosystem.png")
